export function Analytics() {
  return (
    <div className='grid gap-y-4'>
      <div className='flex gap-x-4 text-gray'>
        <img src="/twitter-icon.svg" alt="Twitter Logo" />
        <p>35,050 tweets posted.</p>
      </div>

      <div className='flex gap-x-4 text-gray'>
        <img src="/github-icon.svg" alt="GitHub Logo" />
        <p>35,050 commits in the last year.</p>
      </div>

      <div className='flex gap-x-4 text-gray'>
        <img src="/trendup.svg" alt="Icon Trend Up" />
        <p>35,050 views on the blog.</p>
      </div>
    </div>
  )
}