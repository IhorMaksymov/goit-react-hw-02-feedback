import PropTypes from 'prop-types';
import { Item } from './StatisticsStyles';

export const Statistics = ({ good, neutral, bad, total, positivePercentage = 0 }) => {
    return (
        <ul>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {positivePercentage ? positivePercentage : 0} %</Item>
        </ul>
    );
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.number.isRequired
}