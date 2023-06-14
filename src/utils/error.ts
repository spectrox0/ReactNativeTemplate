import {showError} from './message';

export class AppError extends Error {
  private readonly code: number;
  constructor(message: string, code: number) {
    super(message);
    showError(message);
    this.code = code;
  }
  getCode = () => this.code;
}
