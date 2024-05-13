import { Navigate } from "react-router-dom";

interface Props {}

export default function Home(props: Props) {
  return <Navigate to="/quiz" replace />;
}
