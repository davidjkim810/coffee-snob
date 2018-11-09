
export const createCafe = (cafeData) => dispatch => {
  fetch('http://localhost:3001/api/cafes', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(cafeData)
  })
    .then(res => res.json())
    .then(cafe =>
      dispatch({
      type: 'NEW_CAFE',
      payload: cafe
    }));
  };

export const fetchCafes = () => dispatch => {
  fetch('http://localhost:3001/api/cafes')
    .then(res => res.json())
    .then(cafes => dispatch({
      type: 'FETCH_CAFES',
      payload: cafes
    }))
}

export const fetchCafe = (cafeId) => dispatch => {
  fetch(`http://localhost:3001/api/cafes/${cafeId}`)
    .then(res => res.json())
    .then(cafe => dispatch ({
      type: 'FETCH_CAFE',
      payload: cafe
    }))
}

export const fetchComments = (cafeId) => dispatch => {
  fetch(`http://localhost:3001/api/cafes/${cafeId}/comments`)
    .then(res => res.json())
    .then(comments => dispatch({
      type: 'FETCH_COMMENTS',
      payload: comments
    }))
}

export const createComment = (commentData, cafeId) => dispatch => {
  fetch(`http://localhost:3001/api/cafes/${cafeId}/comments`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(commentData)
  })
    .then(res => res.json())
    .then(comment => dispatch({
      type: 'ADD_COMMENT',
      payload: comment
    }))
}
