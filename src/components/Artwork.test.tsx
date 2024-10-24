import React from 'react';
import { render, screen } from '@testing-library/react';
import { Artwork } from './Artwork';


test('renders artwork details', () => {
    const mockArtwork = {
        id: 1,
        title: 'Test Artwork',
        artist_title: 'Test Artist',
        image_id: 'Test image ID'
    };

    render(<Artwork artwork={mockArtwork} />);

    expect(screen.getByText('Test Artwork')).toBeInTheDocument();
    expect(screen.getByText('Artist: Test Artist')).toBeInTheDocument();
    expect(screen.getByAltText('Test Artwork')).toHaveAttribute(
        'src',
        'https://www.artic.edu/iiif/2/test-image-id/full/200,/0/default.jpg'
    );
});