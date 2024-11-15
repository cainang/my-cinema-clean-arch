import Room from "../core/entity/Room";
import RoomUseCase from "../core/usecases/RoomUseCase";
import RoomRepositoryMemory from "../infra/repository/RoomRepositoryMemory";

function makeRoom(): {
  roomRepositoryMemory: RoomRepositoryMemory;
  roomUseCase: RoomUseCase;
} {
  const roomRepositoryMemory = new RoomRepositoryMemory();
  const roomUseCase = new RoomUseCase(roomRepositoryMemory);

  return {
    roomRepositoryMemory,
    roomUseCase,
  };
}

test("Should get one room", async function () {
  const { roomUseCase } = makeRoom();
  let query = await roomUseCase.get(1);
  expect(query.id).toBe(1);
});

test("Should get all rooms", async function () {
  const { roomUseCase } = makeRoom();
  let query = await roomUseCase.getAll();

  expect(query.length).toBeGreaterThan(0);
});

test("Should create one room", async function () {
  const { roomUseCase } = makeRoom();
  let newRoom = new Room(2, "Sala 2", 0, 20, 1);

  let query = await roomUseCase.save(newRoom);
  expect(query).toBe(newRoom);
});

test("Should edit one room", async function () {
  const { roomUseCase } = makeRoom();
  let queryGet = await roomUseCase.get(1);

  let newRoom = new Room(
    1,
    "Sala Nova",
    queryGet.capacity,
    queryGet.maxCapacity,
    queryGet.cinema_id
  );

  let queryEdit = await roomUseCase.edit(newRoom);
  let queryGetVal = await roomUseCase.get(1);

  expect(queryGetVal).toBe(newRoom);
});

test("Should enter in one room", async function () {
  const { roomUseCase } = makeRoom();
  let queryGet = await roomUseCase.get(1);

  let newRoom = new Room(
    queryGet.id,
    queryGet.name,
    queryGet.capacity,
    queryGet.maxCapacity,
    queryGet.cinema_id
  );
  newRoom.enter();

  let query = await roomUseCase.edit(newRoom);
  expect(query.capacity).toBe(1);
});
