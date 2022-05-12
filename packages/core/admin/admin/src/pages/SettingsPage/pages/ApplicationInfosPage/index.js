import React from 'react';
import { useIntl } from 'react-intl';
import { useAppInfos, SettingsPageTitle, useFocusWhenNavigate } from '@strapi/helper-plugin';
import { HeaderLayout, Layout, ContentLayout } from '@strapi/design-system/Layout';
import { Main } from '@strapi/design-system/Main';
import { Box } from '@strapi/design-system/Box';
import { Grid, GridItem } from '@strapi/design-system/Grid';
import { Typography } from '@strapi/design-system/Typography';

import { Stack } from '@strapi/design-system/Stack';
import { Link } from '@strapi/design-system/Link';
import ExternalLink from '@strapi/icons/ExternalLink';

const ApplicationInfosPage = () => {
  const { formatMessage } = useIntl();
  useFocusWhenNavigate();
  const appInfos = useAppInfos();
  // [PK] change content
  const { appName, appVersion, nodeVersion, strapiVersion } = appInfos;

  const currentPlan = appInfos.communityEdition
    ? 'app.components.UpgradePlanModal.text-ce'
    : 'app.components.UpgradePlanModal.text-ee';

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
        />
        <ContentLayout>
          <Box
            hasRadius
            background="neutral0"
            shadow="tableShadow"
            paddingTop={7}
            paddingBottom={7}
            paddingRight={6}
            paddingLeft={6}
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
        </ContentLayout>
      </Main>
    </Layout>
  );
};

export default ApplicationInfosPage;
