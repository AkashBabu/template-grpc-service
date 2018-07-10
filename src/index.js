import grpc from 'grpc';
import path from 'path';

const PROTO_PATH = path.join(__dirname, './main.proto');

const helloProto = grpc.load(PROTO_PATH).Hello;

function Hi(call, cb) {
    cb(null, { msg: call.request.msg })
}

function main() {
    const server = new grpc.Server();
    server.addService(helloProto.Greeting.service, { _Hi: Hi });
    server.bind('0.0.0.0:50001', grpc.ServerCredentials.createInsecure());
    server.start();
}

main();
