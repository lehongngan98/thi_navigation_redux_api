const API_URL = 'https://6561fb1edcd355c083246fec.mockapi.io/donut';

export const fetchData = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  console.log('data:', data);
  return data;
};

export const addData = async (newItem) => {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newItem),
  });

  const data = await response.json();
  return data;
};

export const updateData = async (item) => {
  const response = await fetch(`${API_URL}/${item.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  });

  const data = await response.json();
  return data;
};

export const deleteData = async (id) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
  });

  const data = await response.json();
  return data;
};
