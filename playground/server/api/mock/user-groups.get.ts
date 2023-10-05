import { defineEventHandler } from "#imports";

export default defineEventHandler((event) => {
  return {
    page: 1,
    total: 5,
    limit: 30,
    count: 5,
    items: [
      {
        id: "caacf560-42e5-47cc-9f59-b4b5bdbdf0f5",
        group_name: "Manager",
        email: "manager@gmail.com",
        member_count: 10,
      },
      {
        id: "caacf560-42e5-47cc-9f59-b4b5bdbdf0f5",
        group_name: "HR",
        email: "hr@gmail.com",
        member_count: 5,
      },
      {
        id: "caacf560-42e5-47cc-9f59-b4b5bdbdf0f5",
        group_name: "IT",
        email: "it@gmail.com",
        member_count: 3,
      },
      {
        id: "caacf560-42e5-47cc-9f59-b4b5bdbdf0f5",
        group_name: "Operation",
        email: "operation@gmail.com",
        member_count: 15,
      },
      {
        id: "caacf560-42e5-47cc-9f59-b4b5bdbdf0f5",
        group_name: "C Level",
        email: "company@gmail.com",
        member_count: 3,
      },
    ],
  };
});
