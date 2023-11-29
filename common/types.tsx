export type Task = {
  text: string;
  checked: boolean;
  owner: string | null | undefined;
};

export type TaskWithId = Task & {
  id: string;
};
