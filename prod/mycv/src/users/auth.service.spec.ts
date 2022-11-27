import { Test } from "@nestjs/testing";
import { AuthService } from "./auth.service";
import { User } from "./users.entity";
import { UsersService } from "./users.service";

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    // Create a fake copy of the UsersService
    const fakeUsesrsService: Partial<UsersService> = {
      find: () => Promise.resolve([]),
      create: (email: string, password: string) =>
        Promise.resolve({ id: 1, email, password } as User),
    };

    const module = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: UsersService,
          useValue: fakeUsesrsService // Override the actual UsersService
        },
      ],
    }).compile();

    service = module.get(AuthService);
  });


  it('can create an instance of auth service', async () => {
    expect(service).toBeDefined();
  });
});
