export async function get() {
  // you could connect to db and fetch data
  const guides = [
    { id: 1, title: "Some Title 1" },
    { id: 2, title: "Some Title 2" },
    { id: 3, title: "Some Title 3" },
    { id: 4, title: "Some Title 4" },
    { id: 5, title: "Some Title 5" }
  ];

  return {
    status: 200,
    body: guides
  };
}
