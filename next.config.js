/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  async redirects() {
    return [
      {
        source: '/wpp',
        destination: 'https://wa.me/+5493454087690',
        permanent: true,
      },
      {
        source: '/c4',
        destination: 'https://drive.google.com/drive/folders/1-J8rCTCpMmMG-uAyeuLte9VpKag2uuDg',
        permanent: true,
      },
      {
        source: '/c3',
        destination: 'https://drive.google.com/drive/folders/1w2VkIMFPBd3Jk2Dms72-lrtpO4R4LbHC',
        permanent: true,
      },
      {
        source: '/f1',
        destination: 'https://drive.google.com/drive/folders/1-87IJ4HCMV6h6ZVsIR32o9w59JSwcTil',
        permanent: true,
      },
      {
        source: '/f3',
        destination: 'https://drive.google.com/drive/folders/1655yWkaeNN6FCab9ZCo1Wyf3aFNJllMI',
        permanent: true,
      },
      {
        source: '/f2',
        destination: 'https://drive.google.com/drive/folders/1ANxkUFpvy6_mipm2O79MgYUW4DAEO_2I',
        permanent: true,
      },
      {
        source: '/ma',
        destination: 'https://drive.google.com/drive/folders/148e_ner0p_5kjOU_rp_hFSQdxpzQn5hC',
        permanent: true,
      },
      {
        source: '/pye',
        destination: 'https://drive.google.com/drive/folders/15wrRnBLSuDqUQ8IckxkYaVwJr0qnVF9M',
        permanent: true,
      },
      {
        source: '/q',
        destination: 'https://drive.google.com/drive/folders/15w5pfsG1QTrKp2rGxyYi1ljQ4BUBiA7H',
        permanent: true,
      },
      {
        source: '/tci',
        destination: 'https://drive.google.com/drive/folders/1_f3YcNejbQCMYS6mpv5djY6YlBHP4PEI',
        permanent: true,
      },
    ]
  },
}
//module.exports = nextConfig
