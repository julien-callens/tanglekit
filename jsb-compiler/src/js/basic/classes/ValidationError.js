export class ValidationError extends Error {
    constructor(message, details) {
        super(message);
        this.name = "ValidationError";
        this.details = details;
    }

    toString() {
        return `${this.name}: ${this.message}\nDetails: ${this.details}`;
    }
}
