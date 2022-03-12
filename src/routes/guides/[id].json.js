export async function get({ params }) {
  // you could connect to db and fetch data

  const guides = [
    {
      id: 1,
      title: "Some Title 1",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam vel molestiae minima. Quo laboriosam officia saepe placeat quam veritatis illo, rem nam laudantium quos, consequatur repellat harum odit corporis quia doloribus reiciendis asperiores tempora. Quam et aut doloribus, libero in ab laudantium commodi. Consequatur voluptatum ipsum illo sint doloribus nulla accusamus, nam quidem ut, quasi magni? Enim, qui? Dignissimos."
    },
    {
      id: 2,
      title: "Some Title 2",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam vel molestiae minima. Quo laboriosam officia saepe placeat quam veritatis illo, rem nam laudantium quos, consequatur repellat harum odit corporis quia doloribus reiciendis asperiores tempora. Quam et aut doloribus, libero in ab laudantium commodi. Consequatur voluptatum ipsum illo sint doloribus nulla accusamus, nam quidem ut, quasi magni? Enim, qui? Dignissimos."
    },
    {
      id: 3,
      title: "Some Title 3",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam vel molestiae minima. Quo laboriosam officia saepe placeat quam veritatis illo, rem nam laudantium quos, consequatur repellat harum odit corporis quia doloribus reiciendis asperiores tempora. Quam et aut doloribus, libero in ab laudantium commodi. Consequatur voluptatum ipsum illo sint doloribus nulla accusamus, nam quidem ut, quasi magni? Enim, qui? Dignissimos."
    },
    {
      id: 4,
      title: "Some Title 4",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam vel molestiae minima. Quo laboriosam officia saepe placeat quam veritatis illo, rem nam laudantium quos, consequatur repellat harum odit corporis quia doloribus reiciendis asperiores tempora. Quam et aut doloribus, libero in ab laudantium commodi. Consequatur voluptatum ipsum illo sint doloribus nulla accusamus, nam quidem ut, quasi magni? Enim, qui? Dignissimos."
    },
    {
      id: 5,
      title: "Some Title 5",
      body: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos nam vel molestiae minima. Quo laboriosam officia saepe placeat quam veritatis illo, rem nam laudantium quos, consequatur repellat harum odit corporis quia doloribus reiciendis asperiores tempora. Quam et aut doloribus, libero in ab laudantium commodi. Consequatur voluptatum ipsum illo sint doloribus nulla accusamus, nam quidem ut, quasi magni? Enim, qui? Dignissimos."
    }
  ];

  const guide = guides.find((g) => g.id == params.id);

  if (guide) {
    return {
      status: 200,
      body: { guide }
    };
  }

  return {
    status: 404
  };
}
