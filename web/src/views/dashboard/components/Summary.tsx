import { Heading5, Heading6 } from '@components/ui/Typography/Headings';
import WeekGraph from '@components/WeekGraph';
import styled from '@emotion/styled';
import { useConfig } from '@hooks/useConfig';
import { Divider, Stack } from '@mui/material';
import { red, green } from '@mui/material/colors';
import { Box } from '@mui/system';
import { TransactionEvents } from '@typings/Events';
import { GetTransactionHistoryResponse } from '@typings/Transaction';
import { formatMoney } from '@utils/currency';
import { fetchNui } from '@utils/fetchNui';
import theme from '@utils/theme';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

const Title = styled(Heading5)`
  color: ${theme.palette.primary.contrastText};
`;

const Container = styled.div`
  padding: ${theme.spacing(3)};
  border-radius: ${theme.spacing(2)};
  background: linear-gradient(179.77deg, #e65f0e 0.2%, #e64f0e 99.8%);
`;

const ExpensesIncomeContainer = styled(Box)`
  background: ${theme.palette.background.default};
  margin-top: 1rem;
  border-radius: ${theme.spacing(2)};
  border: 1px dashed ${theme.palette.background.dark12};
`;

const Income = styled(Heading5)`
  color: ${green[500]};
`;

const Expense = styled(Heading5)`
  color: #ff0000;
`;

const DashboardSummary = () => {
  const { t } = useTranslation();
  const config = useConfig();
  const [data, setData] = useState<GetTransactionHistoryResponse | undefined>();

  useEffect(() => {
    fetchNui<GetTransactionHistoryResponse>(TransactionEvents.GetHistory).then(setData);
  }, []);

  return (
    <Container>
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Title>{t('Weekly summary')}</Title>
      </Stack>

      <ExpensesIncomeContainer p={3}>
        <Stack spacing={0.5}>
          <Heading6>{t('Income')}</Heading6>
          <Income>{formatMoney(data?.income ?? 0, config.general)}</Income>
        </Stack>

        <Divider orientation="horizontal" sx={{ margin: '1rem 0' }} />

        <Stack spacing={0.5}>
          <Heading6>{t('Expenses')}</Heading6>
          <Expense>{formatMoney(data?.expenses ?? 0, config.general)}</Expense>
        </Stack>
      </ExpensesIncomeContainer>

      <Stack marginTop={2} spacing={2}>
        <Heading6>{t('Report')}</Heading6>
        <WeekGraph data={data?.lastWeek ?? {}} />
      </Stack>
    </Container>
  );
};

export default DashboardSummary;
