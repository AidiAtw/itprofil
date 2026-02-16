# itprofil

## Git – Conventional Commits

Používejte formát commit zpráv podle Conventional Commits:

- Formát: `type(scope): krátký popis změny`
- Povolené typy: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`

Příklad: `feat(profile): přidat editaci profilu`

Repo obsahuje validační hook, který zkontroluje formát commit zprávy.
Chcete-li ho aktivovat lokálně, spusťte v repozitáři:

```bash
git config core.hooksPath .githooks
```

Po aktivaci bude commit zamítnut, pokud nebude splňovat výše uvedený formát.



### Ukázky správných commitů

- `feat(data): add interests to profile.json`

	Přidali jste novou část `interests` do JSON souboru.

- `feat(ui): render interests section from json`

	Vykreslili jste sekci zájmů na stránce pomocí dat z `profile.json`.

- `fix(profile): correct interests rendering on mobile`

	Oprava zobrazení sekce zájmů na mobilních zařízeních.

- `style(profile): adjust interests layout and spacing`

	Úprava CSS vzhledu sekce zájmů (bez změny funkcionality).

- `docs(readme): add commit examples and hook instructions`

	Aktualizace dokumentace s příklady správných commit zpráv.

- `chore(deps): update dev dependencies`

	Údržba závislostí bez změny kódu aplikace.

Tyto příklady odpovídají požadovanému formátu `type(scope): popis`.


