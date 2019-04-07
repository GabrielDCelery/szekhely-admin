export function filterRowsUsingSearchTerm(_rows = [], _searchTerm = '') {
  if (_searchTerm === '') {
    return _rows;
  }

  const _regExp = new RegExp(_searchTerm.toLowerCase());

  return _rows.filter(_row => {
    const _keys = Object.keys(_row);

    for (let _i = 0, _iMax = _keys.length; _i < _iMax; _i++) {
      let _value = _row[_keys[_i]];
      _value = typeof _value === 'string' ? _value.toLowerCase() : _value;

      if (_regExp.test(_value)) {
        return true;
      }
    }

    return false;
  });
}