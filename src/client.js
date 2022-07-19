import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = sanityClient({
  projectId: "bzk3bs02",
  dataset: 'production',
  apiVersion: '2022-02-01',
  useCdn: true,
  token: "skb95kRoGGD5YcWWCiOzwQVAJUmNVupOABQvEA2YiiGsebul7Q99BJteOsLh3MyT7v6PcPAQgH83RzDxq5TvBYGKpt6OhMrDviBxJTQDLEaGm46FZZWP5IaXun2usDZlGHJPI060H3HYC6bTxy52QcVCE6JvHsJyhRrR3YvoBGHDMvNFLZoE",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
