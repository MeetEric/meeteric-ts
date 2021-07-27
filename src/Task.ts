export class Task {
  public static async Wait(timeoutMs: number): Promise<void> {
    return new Promise(resolve => {
      setTimeout(() => resolve(undefined), timeoutMs);
    });
  }
}
