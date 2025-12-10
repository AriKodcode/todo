import { nanoid } from 'nanoid';

export default function createMission(taskName, newDetails, newStatus) {
  const cretaeId = nanoid();
  const time = new Date().toLocaleDateString();
  let task = {
    Name: taskName,
    id: cretaeId,
    CreationDate: time,
    details: newDetails,
    Status: newStatus,
  };
  return task;
}
