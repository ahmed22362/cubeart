export const fetchUsers = async (query) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_URL}/user`;

    // If query object is provided, append parameters to URL
    if (query) {
      const queryString = new URLSearchParams(query).toString();
      url += `?${queryString}`;
    }
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDBkMTY5Y2RiZDVkY2RhOTJkYWUzYyIsImlhdCI6MTcxMTMyOTgxMSwiZXhwIjoxNzE2NTEzODExfQ.J6DGgLZY59R9ZDRrkepIQeE1P9gzMD8Ba2kNK6e2WbE`,
      },
      cache: "no-store",
    });
    const result = await res.json();
    if (result.status === "success") {
      return result;
    } else {
      console.error(result.message);
      throw new Error(`Can't get users: ${result.message}`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch users!: ${error.message}`);
  }
};
export const fetchProducts = async (query) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_URL}/product`;

    // If query object is provided, append parameters to URL
    if (query) {
      const queryString = new URLSearchParams(query).toString();
      url += `?${queryString}`;
    }
    const res = await fetch(url, {
      cache: "no-store",
    });
    const result = await res.json();
    if (result.status === "success") {
      return result;
    } else {
      console.error(result.message);
      throw new Error(`Can't get users: ${result.message}`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch users!: ${error.message}`);
  }
};
export const fetchUser = async (id) => {
  try {
    let url = `${process.env.NEXT_PUBLIC_URL}/user/${id}`;
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2MDBkMTY5Y2RiZDVkY2RhOTJkYWUzYyIsImlhdCI6MTcxMTMyOTgxMSwiZXhwIjoxNzE2NTEzODExfQ.J6DGgLZY59R9ZDRrkepIQeE1P9gzMD8Ba2kNK6e2WbE`,
      },
      cache: "no-store",
    });
    const result = await res.json();
    if (result.status === "success") {
      return result;
    } else {
      console.error(result.message);
      throw new Error(`Can't get user: ${result.message}`);
    }
  } catch (error) {
    throw new Error(`Failed to fetch users!: ${error.message}`);
  }
};
