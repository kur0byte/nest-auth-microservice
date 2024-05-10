// import { CreateUserDto } from '@/shared';
import { Controller, ParseUUIDPipe, ValidationPipe } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService} from './auth.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern("CREATE_USER")
  handleUserCreate(@Payload(ValidationPipe) data: any) {
     console.log(data);
    return this.authService.createUser(data);
  }

  @MessagePattern("GET_USER")
  handleGetUser(@Payload('userId') userId: any) {
    console.log(this.authService.getUser(userId))
    return this.authService.getUser(userId);
  }
}