import { useQuery } from "@apollo/client";
import {ME} from "../graphql/queries";

const useMe = () => {
  const { data } = useQuery(ME);
  return data?.me;
};

export default useMe;