import { LabelStyled, InputStyled, FormStyled } from './Common.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateFilter } from 'redux/filterSlice';

const Filter = () => {
  const valueRedux = useSelector(state => state.filter.value);
  const dispatch = useDispatch();
  return (
    <FormStyled filterForm={'border-style: none; margin-bottom: 0;'}>
      <LabelStyled>
        Find contacts by name
        <InputStyled
          type="text"
          title="filter"
          value={valueRedux}
          onChange={e => {
            dispatch(updateFilter(e.currentTarget.value));
          }}
          inputFilter={'margin: 0; margin-top: 10px;'}
        />
      </LabelStyled>
    </FormStyled>
  );
};

export default Filter;
