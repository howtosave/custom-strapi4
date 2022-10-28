import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Typography } from '@strapi/design-system/Typography';
// [PK] remove useless codes
import { Stack } from '@strapi/design-system/Stack';
import { Box } from '@strapi/design-system/Box';

const WordWrap = styled(Typography)`
  word-break: break-word;
`;

const StackCustom = styled(Stack)`
  align-items: flex-start;
`;

const HomeHeader = ({ hasCreatedContentType, onCreateCT }) => {
  const { formatMessage } = useIntl();

  return (
    <div>
      <Box paddingLeft={6} paddingBottom={10}>
        <StackCustom spacing={5}>
          <Typography as="h1" variant="alpha">
            {hasCreatedContentType
              ? formatMessage({
                  id: 'app.components.HomePage.welcome.again',
                  defaultMessage: 'Welcome 👋',
                })
              : formatMessage({
                  id: 'app.components.HomePage.welcome',
                  defaultMessage: 'Welcome on board!',
                })}
          </Typography>
        {/* [PK] remove useless codes */}
        </StackCustom>
      </Box>
    </div>
  );
};

HomeHeader.defaultProps = {
  hasCreatedContentType: undefined,
  onCreateCT: undefined,
};

HomeHeader.propTypes = {
  hasCreatedContentType: PropTypes.bool,
  onCreateCT: PropTypes.func,
};

export default HomeHeader;
