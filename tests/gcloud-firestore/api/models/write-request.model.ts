/* tslint:disable */
import {
  Write,
} from '.';

/**
 * The request for Firestore.Write.
 * 
 * 
 * The first request creates a stream, or resumes an existing one from a token.
 * 
 * 
 * When creating a new stream, the server replies with a response containing
 * only an ID and a token, to use in the next request.
 * 
 * 
 * When resuming a stream, the server first streams any responses later than the
 * given token, then a response containing only an up-to-date token, to use in
 * the next request.
 */
export interface WriteRequest {
  labels?: { [key: string]: string };  // Labels associated with this write request.
  streamId?: string;  // The ID of the write stream to resume.This may only be set in the first message. When left empty, a new writestream will be created.
  streamToken?: string;  // A stream token that was previously sent by the server.The client should set this field to the token from the most recentWriteResponse it has received. This acknowledges that the client hasreceived responses up to this token. After sending this token, earliertokens may not be used anymore.The server may close the stream if there are too many unacknowledgedresponses.Leave this field unset when creating a new stream. To resume a stream ata specific point, set this field and the `stream_id` field.Leave this field unset when creating a new stream.
  writes?: Write[];  // The writes to apply.Always executed atomically and in order.This must be empty on the first request.This may be empty on the last request.This must not be empty on all other requests.
}
