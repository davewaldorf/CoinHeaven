import shortenAddress from "../utils/shortenAddress";
import useFetch from "../hooks/useFetch";
import PropTypes from 'prop-types';

const TransactionCard = ({ addressTo, addressFrom, timestamp, message, amount, url, keyword }) => {
  const gif = useFetch({ keyword });

  return (
    <div className="card card-bordered glass w-72 m-10 p-0">
      <figure><img src={gif || url} alt="gif" /></figure>
      <div className="card-body">
        <h2 className="card-title text-sm	">address from: {shortenAddress(addressFrom)}</h2>
        <h2 className="card-title text-sm	">address to: {shortenAddress(addressTo)} </h2>
        <p>{message}</p>
        <div className="card-actions justify-end">
          <div className="badge badge-primary badge-outline">{amount}ETH</div>
          <div className="badge badge-secondary badge-outline">{timestamp}</div>
        </div>
      </div>
    </div>
  )
}

TransactionCard.propTypes = {
  addressTo: PropTypes.string.isRequired,
  addressFrom: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  message: PropTypes.string,
  amount: PropTypes.string.isRequired,
  url: PropTypes.string,
  keyword: PropTypes.string,
};


export default TransactionCard