const URL = 'http://localhost:3001/api'

export const createCafe = (cafeData) => dispatch => {
  fetch(`http://localhost:3001/api/cafes`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(cafeData)
  })
    .then(res => res.json())
    .then(cafe => dispatch({
      type: 'NEW_CAFE',
      payload: cafe
    }));
  };
