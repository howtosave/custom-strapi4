import React, { useRef } from 'react';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useIntl } from 'react-intl';
import {
  useAppInfos,
  SettingsPageTitle,
  useFocusWhenNavigate,
  CheckPermissions,
  useNotification,
  useTracking,
} from '@strapi/helper-plugin';
import { HeaderLayout, Layout, ContentLayout } from '@strapi/design-system/Layout';
import { Main } from '@strapi/design-system/Main';
import { Box } from '@strapi/design-system/Box';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { Typography } from '@strapi/design-system/Typography';
import { Stack } from '@strapi/design-system/Stack';
import { Button } from '@strapi/design-system/Button';
import { Link } from '@strapi/design-system/v2/Link';
import ExternalLink from '@strapi/icons/ExternalLink';
import Check from '@strapi/icons/Check';
import { useConfigurations } from '../../../../hooks';
import Form from './components/Form';
import { fetchProjectSettings, postProjectSettings } from './utils/api';
import getFormData from './utils/getFormData';

const permissions = [{ action: 'admin::project-settings.update', subject: null }];

const ApplicationInfosPage = () => {
  const inputsRef = useRef();
  const toggleNotification = useNotification();
  const { trackUsage } = useTracking();
  const { formatMessage } = useIntl();
  const queryClient = useQueryClient();
  useFocusWhenNavigate();
  const appInfos = useAppInfos();
  // [PK] change content
  const { appName, appVersion, nodeVersion, strapiVersion } = appInfos;
  const { updateProjectSettings } = useConfigurations();

  const submitMutation = useMutation((body) => postProjectSettings(body), {
    async onSuccess({ menuLogo }) {
      await queryClient.invalidateQueries('project-settings', { refetchActive: true });
      updateProjectSettings({ menuLogo: menuLogo?.url });
    },
  });

  const handleSubmit = () => {
    const inputValues = inputsRef.current.getValues();
    const formData = getFormData(inputValues);

    submitMutation.mutate(formData, {
      // [PK] remove tracking codes

      onError() {
        toggleNotification({
          type: 'warning',
          message: { id: 'notification.error', defaultMessage: 'An error occurred' },
        });
      },
    });
  };

  return (
    <Layout>
      <SettingsPageTitle name="Application" />
      <Main>
        <HeaderLayout
          title={formatMessage({ id: 'Settings.application.title', defaultMessage: 'Overview' })}
          subtitle={formatMessage({
            id: 'Settings.application.description',
            defaultMessage: 'Administration panel’s global information',
          })}
          primaryAction={
            <Button onClick={handleSubmit} startIcon={<Check />}>
              {formatMessage({ id: 'global.save', defaultMessage: 'Save' })}
            </Button>
          }
        />
        <ContentLayout>
          <Stack spacing={6}>
            <Box
              hasRadius
              background="neutral0"
              shadow="tableShadow"
              paddingTop={6}
              paddingBottom={6}
              paddingRight={7}
              paddingLeft={7}
            >
              <Stack spacing={5}>
                <Typography variant="delta" as="h3">
                  {formatMessage({
                    id: 'global.details',
                    defaultMessage: 'Details',
                  })}
                </Typography>

                {/* [PK] change content */}

                <Grid paddingTop={1}>
                  <GridItem col={6} s={12}>
                    <Typography variant="sigma" textColor="neutral600">
                      Server Version
                    </Typography>
                    <Typography as="p">v{appVersion}</Typography>
                  </GridItem>
                </Grid>

                <Box paddingTop={1}>
                  <Typography variant="sigma" textColor="neutral600">
                    {formatMessage({
                      id: 'Settings.application.node-version',
                      defaultMessage: 'node version',
                    })}
                  </Typography>
                  <Typography as="p">{nodeVersion}/{strapiVersion}</Typography>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </ContentLayout>
      </Main>
    </Layout>
  );
};

export default ApplicationInfosPage;
