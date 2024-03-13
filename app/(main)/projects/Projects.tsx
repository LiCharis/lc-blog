import { ProjectCard } from '~/app/(main)/projects/ProjectCard'
import { getSettings } from '~/sanity/queries'

export async function Projects() {
  const projects = (await getSettings())?.projects || [];

  // const projectsd =  [
  //   {
  //     _id:1,
  //     name:'API开放平台',
  //     url:"https://api.liproject.top",
  //     description:"这是一个api的开放平台，管理员执行上线、下线或修改等一系列对于接口的操作，" +
  //       "用户可以点击接口详情页查看接口信息，然后根据参数要求调用接口，获取到返回结果",
  //     icon:apiImage,
  //   },
  //   {
  //     _id:2,
  //     name:'数据智能分析平台',
  //     url:"https://chart.liproject.top",
  //     description:"这是智能BI项目，用户可上传带有原始数据的xlxs文件，然后输入请求，" +
  //       "平台就会解析表格数据生成分析结论及对应的echart图表，用户可自定管理生成的图表，包括删除、重试等",
  //     icon:biImage,
  //   },
  //   {
  //     _id:3,
  //     name:'基于知识图谱的医学问答系统',
  //     url:"https://qs.liproject.top",
  //     description:"这是一个QS平台，底层基于知识图谱，可根据输入解析出关键词从知识图谱中提取相应的回答返回。" +
  //       "用户可查看历史消息记录并继续问答，分享聊天内容等",
  //     icon:biImage,
  //   },
  //
  // ]

  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((project) => (
        <ProjectCard project={project} key={project._id} />
      ))}
    </ul>
  )
}
