import Pusher from "pusher-js";

class PusherClass {
  private static pusher: Pusher | null = null;

  static getPusher() {
    if (!this.pusher) {
      this.pusher = new Pusher(process.env.PUSHER_APP_KEY!, {
        cluster: "ap1",
        userAuthentication: {
          endpoint: `${process.env.SERVER_BASE_URL}/pusher/user-auth`,
          transport: "jsonp",
        },
        channelAuthorization: {
          endpoint: `${process.env.SERVER_BASE_URL}/pusher/channel-auth`,
          transport: "jsonp",
        },
      });
    }
    return this.pusher;
  }
}
export default PusherClass.getPusher();
