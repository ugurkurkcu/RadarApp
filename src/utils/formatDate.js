import moment from "moment/moment";

const formatDate = (unix_time) => {
  const formatedDate = new Date(unix_time * 1000);

  return moment(formatedDate).calendar()
};

export default formatDate;
