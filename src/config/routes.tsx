import { RouteObject } from "react-router-dom";
import Login from "../domain/Auth/component/login";
import Dashboard from "../domain/Dashboard/view/dashboard.view";
import UserStateManager from "../redux/stateMangement";
// import { UseAppDispatch } from "../redux/redux.hooks";


export default function appRouter(): RouteObject[] {

    
   
    return [
      {
        path: "/",
        element: (
          <UserStateManager>
            <Login />
          </UserStateManager>
        ),
      },
      {
          path: "/dashboard",
      element: (
        <UserStateManager>
          <Dashboard />
        </UserStateManager>
      )
      },
    ];
}
