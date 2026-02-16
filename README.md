# itprofil

## Git – Conventional Commits

Používám CC, funguje:
- Formát: `type(scope): krátký popis změny`
- Povolené typy: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`

Příklad: `feat(profile): přidat editaci profilu`

### ukázky

- `feat(data): pridane zajmy v profile.json`

	Nová část `interests` v json

- `feat(ui): vykreslení dat z jsonu`

	vykresleni sekce zájmů na stránce z `profile.json`.

- `fix(profile): oprava zobrazeni obrazku v projektu`

	Oprava zobrazení sekce zájmu

- `style(profile): upraveni barev a stylu`

	oprava CSS vzhledu

- `docs(readme): update dokumentace`

	Aktualizace dokumentace s příklady commit zpráv

- `chore(deps): aktualizace dependu`

	Údržba závislostí bez změny kódu

příklady odpovídají požadovanému formátu `type(scope): popis`.


