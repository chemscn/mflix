
import create from 'zustand/vanilla';
import { Movie } from '../models';

export const store = create(() => ({isNavbarOpen: false, moviesObject: []}));
