import DefaultTags from '@/app/DefaultTags'

export default function Head() {
  const metaDescription =
    'Sean Madzelonka is a highly skilled software engineer with a passion for solving complex problems and creating innovative solutions. With a strong background in various programming languages and technologies, he is dedicated to delivering high-quality software that meets the needs of his clients..'
  return (
    <>
      <DefaultTags />
      <title>
        Sean Madzelonka | Expert Software Engineer: Crafting Innovative
        Solutions for Complex Problems
      </title>
      <meta name="description" key="description" content={metaDescription} />
    </>
  )
}
