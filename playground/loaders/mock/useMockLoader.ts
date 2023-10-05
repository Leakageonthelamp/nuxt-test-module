import { useLibs } from "#imports";
import { defineStore } from "pinia";

const { usePageLoader } = useLibs();

export interface IUserGroupMock {
  id: string;
  group_name: string;
  email: string;
  member_count: number;
}

export const useUserGroupsMockLoader = () => {
  return usePageLoader<IUserGroupMock>({
    baseURL: "/api/mock/user-groups",
  });
};

export const useUsersGroupsMockStore = defineStore(
  "user_groups_mock_loader",
  useUserGroupsMockLoader
);
