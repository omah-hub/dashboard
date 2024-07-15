
export interface DashboardCounter {
  success: boolean;
  message: string;
  data: Data;
}

export interface Data {
  employee_count: number;
  loan_count: number;
  requested_loan_count: number;
  active_loan_count: number;
  average_loan_amount: number;
  awaiting_disbursement_loan_count: number;
  repaid_loan_count: number;
}