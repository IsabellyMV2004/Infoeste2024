import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const { method, url, body, headers } = request;

    console.log(`Incoming Request: ${method} ${url}`);
    console.log(`Request Body: ${JSON.stringify(body)}`);
    console.log(`Request Headers: ${JSON.stringify(headers)}`);

    const now = Date.now();

    return next.handle().pipe(
      tap((response) => {
        console.log(
          `Outgoing Response: ${method} ${url} - ${Date.now() - now}ms`,
        );
        console.log(`Response Body: ${JSON.stringify(response)}`);
      }),
    );
  }
}
