/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { useFetcher } from "react-router-dom";
import { Button } from "../UI/Button";
import { updateOrder } from "../../services/apiRestaurant";

/* eslint-disable no-unused-vars */
export const UpdateOrder = function ({ order }) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="primary">Mark as Priority </Button>
    </fetcher.Form>
  );
};

export const updatePriority = async function ({ params }) {
  await updateOrder(params.orderId, { priority: true });
  return null;
};
