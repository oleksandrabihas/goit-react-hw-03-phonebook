import PropTypes from 'prop-types';
import { NotificationMessage } from 'components/NotificationMessage/NotificationMessage';
import { FilterSection } from './Filter.styled';

export const Filter = ({ contacts: { filter, contacts }, onChangeFilter }) => {
  return contacts.length !== 0 ? (
    <FilterSection>
      <label htmlFor="filter">Find contacts by name:</label>
      <input
        id="filter"
        type="text"
        value={filter}
        name="filter"
        onChange={onChangeFilter}
      />
    </FilterSection>
  ) : (
    <NotificationMessage />
  );
};

Filter.propTypes = {
  contacts: PropTypes.shape({
    filter: PropTypes.string.isRequired,
    contacts: PropTypes.array.isRequired,
  }).isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};
