import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "bzk3bs02",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skiO7pFe4OpDkjAJN6p7lcCiYSGqwjVqEFwd5fdYFFgYjXbWjTTdFU7GqQBXjoecoiTXNy4rw2h3sprwUwgVQ63aro1zSqkOcWj8tWyv6xQKuPQPhoGtofoZAkjoDq6AVIrqKSlh6QM4uIYNHpfQEp3ju6kfsCQHz8pbep7ilAKHcK9izeCm",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
