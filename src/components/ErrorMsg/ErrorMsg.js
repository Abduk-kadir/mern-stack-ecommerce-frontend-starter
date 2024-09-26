import Swal from "sweetalert2";
import { useDispatch,useSelector} from "react-redux";
import { resetErrAction } from "../../redux/slices/globalactions/globalAction";
const ErrorMsg = ({ message }) => {
  const dispatch=useDispatch()
  Swal.fire({
    icon: "error",
    title: "Oops...",
    text: message,
  });
 
 dispatch(resetErrAction())

};

export default ErrorMsg;
