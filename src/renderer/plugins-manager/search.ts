import { reactive, toRefs } from 'vue';

const searchManager = () => {
  const state = reactive({
    readonly: false,
    searchValue: '',
    placeholder: '',
  });

  // search Input operation
  const onSearch = (e) => {
    const value = e.target.value;
    state.searchValue = value;
  };

  const setSearchValue = (value: string) => {
    state.searchValue = value;
  };

  const subInputReadonly = (value = false) => {
    state.readonly = value === true ? true : false;
  };

  window.setSubInput = ({ placeholder }: { placeholder: string }) => {
    state.placeholder = placeholder;
  };
  window.removeSubInput = () => {
    state.placeholder = '';
  };
  window.subInputReadonly = (value = false) => {
    state.readonly = value === true ? true : false;
  };
  window.setSubInputValue = ({ value }: { value: string }) => {
    state.searchValue = value;
  };

  window.getMainInputInfo = () => {
    return {
      value: state.searchValue,
      placeholder: state.placeholder,
    };
  };

  return {
    ...toRefs(state),
    onSearch,
    setSearchValue,
    subInputReadonly,
  };
};

export default searchManager;
