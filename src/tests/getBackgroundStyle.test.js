import { describe, expect, it } from "vitest";
import { getBackgroundStyle } from "../lib/getBackgroundStyle";

describe("getBackgroundStyle", () => {
  it("devrait retourner le fond pour un ciel dégagé", () => {
    const result = getBackgroundStyle("clear");
    expect(result).toBe("background: linear-gradient(to bottom right, #87CEEB, #4682B4);");
  });

  it("devrait retourner le fond pour des nuages", () => {
    const result = getBackgroundStyle("clouds");
    expect(result).toBe("background: linear-gradient(to bottom right, #B0C4DE, #778899);");
  });

  it("devrait retourner le fond pour de la pluie", () => {
    const result = getBackgroundStyle("rain");
    expect(result).toBe("background: linear-gradient(to bottom right, #708090, #2F4F4F);");
  });

  it("devrait retourner le fond pour un orage", () => {
    const result = getBackgroundStyle("thunderstorm");
    expect(result).toBe("background: linear-gradient(to bottom right, #4B0082, #000000);");
  });

  it("devrait retourner le fond pour de la neige", () => {
    const result = getBackgroundStyle("snow");
    expect(result).toBe("background: linear-gradient(to bottom right, #ADD8E6, #5F9EA0);");
  });

  it("devrait retourner le fond pour du brouillard", () => {
    const result = getBackgroundStyle("mist");
    expect(result).toBe("background: linear-gradient(to bottom right, #C0C0C0, #A9A9A9);");
  });

  it("devrait retourner le fond par défaut pour une condition inconnue", () => {
    const result = getBackgroundStyle("unknown");
    expect(result).toBe("background: linear-gradient(to bottom right, #87CEEB, #4682B4);"); // Fond par défaut (clear)
  });
});
