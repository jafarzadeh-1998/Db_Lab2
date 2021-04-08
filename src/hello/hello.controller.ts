import { Body, Controller, Get, Header, Post, Query } from '@nestjs/common';
import { HelloService } from './hello.service';
import {ApiResponse, ApiBearerAuth, ApiQuery} from "@nestjs/swagger";

@Controller('hello') 
export class HelloController {
    constructor ( private readonly helloService: HelloService){}
}
