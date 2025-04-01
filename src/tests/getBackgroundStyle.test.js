// utils.test.js
import { getBackgroundStyle } from "../lib/getBackgroundStyle";


describe("getBackgroundStyle", () => {
  it("devrait retourner le fond pour un ciel dégagé", () => {
    const result = getBackgroundStyle("clear");
    expect(result).toBe("background: linear-gradient(to bottom right, #60a5fa, #2563eb);");
  });

  it("devrait retourner le fond pour des nuages", () => {
    const result = getBackgroundStyle("clouds");
    expect(result).toBe("background: linear-gradient(to bottom right, #d1d5db, #60a5fa);");
  });

  it("devrait retourner le fond pour de la pluie", () => {
    const result = getBackgroundStyle("rain");
    expect(result).toBe("background: linear-gradient(to bottom right, #6b7280, #1e40af);");
  });

  it("devrait retourner le fond pour un orage", () => {
    const result = getBackgroundStyle("thunderstorm");
    expect(result).toBe("background: linear-gradient(to bottom right, #374151, #4c1d95);");
  });

  it("devrait retourner le fond pour de la neige", () => {
    const result = getBackgroundStyle("snow");
    expect(result).toBe("background: linear-gradient(to bottom right, #e0f2fe, #93c5fd);");
  });

  it("devrait retourner le fond pour du brouillard", () => {
    const result = getBackgroundStyle("mist");
    expect(result).toBe("background: linear-gradient(to bottom right, #d1d5db, #6b7280);");
  });

  it("devrait retourner le fond par défaut pour une condition inconnue", () => {
    const result = getBackgroundStyle("unknown");
    expect(result).toBe("background: linear-gradient(to bottom right, #60a5fa, #2563eb);"); // Fond par défaut (clear)
  });
});
