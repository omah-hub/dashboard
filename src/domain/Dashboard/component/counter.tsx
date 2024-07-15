import Card from "./countercard";
import { useFetchCounterQuery } from "../../../apis/dashboard.api";
import { useAppSelector } from "../../../redux/redux.hooks";
import { selectAuth } from "../../../features/authSlice";

function Counter() {
  const { name } = useAppSelector(selectAuth);
  const {
    data: fetchResponse,
    isLoading,
    isError,
    error,
  } = useFetchCounterQuery();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    console.error("Error fetching dashboard data:", error);
    // Handle error state or show a message to the user
    return <div>Error fetching dashboard data</div>;
  }

  console.log(fetchResponse);

  return (
    <div className="text-white h-full w-full">
      <div className="md:flex md:flex-col items-center text-[10px] overflow-x-hidden text-center md:text-3xl font-bold">
        <p>Welcome to dashboard</p>
        <p>Email: {name}</p>
      </div>

      <div className="ml-5 grid w-screen mt-10 grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 mx-auto  max-w-[1440px]">
        <Card
          title="Active Loan Count"
          value={fetchResponse?.data.active_loan_count}
        />
        <Card
          title="Average Loan Amount"
          value={fetchResponse?.data.average_loan_amount}
        />
        <Card
          title="Employee Count"
          value={fetchResponse?.data.employee_count}
        />
        <Card
          title="Requested Loan Count"
          value={fetchResponse?.data.requested_loan_count}
        />
        <Card title="Loan Count" value={fetchResponse?.data.loan_count} />
        <Card
          title="Awaiting Disbursement Loan Count"
          value={fetchResponse?.data.awaiting_disbursement_loan_count}
        />
        <Card
          title="Repaid Loan Count"
          value={fetchResponse?.data.repaid_loan_count}
        />
      </div>
    </div>
  );
}

export default Counter;
