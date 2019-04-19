export const exactKeys = Object.keys as <T>(o: T) => (Extract<keyof T, string>)[];

export const retryPromise = (
  getPromise: () => Promise<any>, 
  onSuccess: (data: any) => void, 
  onError: (err: any) => void, 
  retryTimes: number = 2,
) => {
  console.log('retry:', retryTimes);
  getPromise().then(onSuccess).catch(err => {
    if (retryTimes > 0) {
      retryPromise(getPromise, onSuccess, onError, retryTimes - 1);
    } else {
      onError(err);
    }
  });
};
