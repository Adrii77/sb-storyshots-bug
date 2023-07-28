import 'jest-preset-angular/setup-jest';

/*
 * As JSDOM (used by jest) doesn't implements window object,
 * we need to mock some properties/methods
 */
Object.defineProperty(window, 'URL', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    createObjectURL: jest.fn(),
    revokeObjectURL: jest.fn(),
  })),
});
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
