import { render, screen } from '@testing-library/react';
import ProfileCard from './ProfileCard';

describe('ProfileCard', () => {

  // VOORBEELD - Deze test is al ingevuld
  test('VOORBEELD: toont de naam', () => {
    render(<ProfileCard name="Jan" age={25} />);
    const heading = screen.getByText('Jan');
    expect(heading).toBeInTheDocument();
  });

  test('toont de leeftijd', () => {
    render(<ProfileCard name="Piet" age={30} />);
    expect(screen.getByText('Leeftijd: 30')).toBeInTheDocument();
  });

  test('toont bio als die er is', () => {
    render(<ProfileCard name="Jan" bio="Ik hou van programmeren" />);
    expect(screen.getByText('Ik hou van programmeren')).toBeInTheDocument();
  });

  test('toont fallback tekst als bio ontbreekt', () => {
    render(<ProfileCard name="Jan" />);
    expect(screen.getByText('Geen bio beschikbaar')).toBeInTheDocument();
  });

});
